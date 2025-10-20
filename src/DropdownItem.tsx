import { Person } from './types/Person';

type Props = {
  person: Person;
  click: (name: string) => void;
};

export const DropdownItem: React.FC<Props> = ({ person, click }: Props) => {
  return (
    <div
      className="dropdown-item"
      data-cy="suggestion-item"
      onClick={() => click(person.name)}
    >
      <p className="has-text-link"> {person?.name} </p>
    </div>
  );
};
