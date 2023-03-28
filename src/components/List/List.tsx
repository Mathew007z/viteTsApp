import { Sub } from "../../types";


interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) =>  {

  const renderList = (): JSX.Element[] => {
   return subs.map(subs => {
      return (
        <li key={subs.nick}>
          <img src={subs.avatar} alt={`Avatar for ${subs.nick}`} />
          <h4>
            {subs.nick} (<small>{subs.subMonths}</small>)
          </h4>
          <p>{subs.description?.substring(0,100)}</p>
        </li>
      );
    })
  }

    // const { subs } = props
  return (
    <ul>
    {renderList()}
    </ul>
  );
}

export default List;
