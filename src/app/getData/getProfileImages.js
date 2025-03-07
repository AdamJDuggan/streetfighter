const fs = require("fs"); // Import the fs module with promises support

const https = require("https");

const imageUrl = (number) =>
  `https://www.streetfighter.com/6/assets/images/character/select_character${number}_over.png`;
const imagePath = (number) =>
  `../../../public/fighters/fighter${number}/converImg_over.png`; // Replace with your desired file path

const addCharacterImages = async (number) => {
  const imageUrl = `https://www.streetfighter.com/6/assets/images/character/select_character${number}_over.png`;
  const imageName = "converImg_over.png"; // Desired name for the saved image

  const file = fs.createWriteStream(imageName);

  return await https
    .get(imageUrl, (response) => {
      response.pipe(file);

      file.on("finish", () => {
        file.close(); // Close the write stream after the file is written
        console.log(`Image downloaded as ${imageName}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(imageName); // Remove the partially written file in case of error
      console.error(`Error downloading image: ${err.message}`);
    });
};
const path = require("path");

async function createAndWriteToFile(count) {
  const _path = `../../../public/fighters/fighter${count}`;
  const dirPath = path.join(__dirname, _path);
  // const filePath = path.join(dirPath, "test.txt");

  // Ensure the directory exists
  await fs.mkdir(dirPath, { recursive: true });

  await fs.writeFile(`${_path}/converImg_over.png`, "");
  await fs.writeFile(`${_path}/coverImg.png`, "");
}

// createAndWriteToFile().catch(console.error);

// async function createFiles(count) {
//   try {
//     await fs.writeFileSync(
//       `../../../public/fighters/fighter${count}/slatedProfile_over.png`,
//       ""
//     );
//     await fs.writeFileSync(`../../../public/fighters/fighter${count}.png`, "");
//     console.log(`File has been created: fighter${count}`);
//   } catch (err) {
//     console.error(`Error creating directory: ${err.message}`);
//   }
// }

async function renameCharacterDir(count) {
  try {
    fs.rename(
      `../../../public/fighters/fighter${count}`,
      `../../../public/fighters/${count}`,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Directory renamed successfully.");
        }
      }
    );
  } catch (err) {
    console.error(`Error creating directory: ${err.message}`);
  }
}

(async () => {
  for (let i = 1; i <= 19; i++) {
    await renameCharacterDir(i);
  }
})();
