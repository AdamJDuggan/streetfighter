type Props = { params: { id: string } };

export default function Fighter(props: Props) {
  return <div>Fighter {props.params.id}</div>;
}
