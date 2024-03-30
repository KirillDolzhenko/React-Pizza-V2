import classNames from "classnames";

export function Option({ children, status, onClick }: IOption) {
  let activeClass = status ? "active" : null;

  return (
    <li>
      <button
        onClick={onClick}
        className={classNames("options__element", activeClass)}
        disabled={Boolean(activeClass)}
      >
        {children}
      </button>
    </li>
  );
}

interface IOption {
  children: string;
  status?: boolean;
  onClick?: () => void;
}
