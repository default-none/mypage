type Props = {
  link: string | undefined;
};

export function ProjectNav({ link }: Props) {
  return (
    <nav>
      <ul className="flex justify-center text-white-xl text-center">
        <li className="w-[100px] mx-[50px]">
          <a
            id="wup"
            target="_blank"
            href={
              link === "team1"
                ? "https://default-none.github.io/f12project/"
                : link === "team2"
                ? "https://kyuleee.github.io/docsuri/"
                : link === "personal1"
                ? "https://default-none.github.io/kwangjuCC/"
                : undefined
            }
          >
            Page
          </a>
        </li>
        <li className="w-[100px] mx-[50px]">
          <a
            id="wUp"
            target="_blank"
            href={
              link === "team1"
                ? "https://github.com/default-none/f12project"
                : link === "team2"
                ? "https://github.com/kyuleee/docsuri"
                : link === "personal1"
                ? "https://github.com/default-none/kwangjuCC"
                : undefined
            }
          >
            Code
          </a>
        </li>
        <li className="w-[100px] mx-[50px]">
          <a
            id="wUp"
            target="_blank"
            href={
              link === "team1"
                ? "https://default-none.github.io/f12project/"
                : link === "team2"
                ? "https://kyuleee.github.io/docsuri/"
                : undefined
            }
          >
            In More
          </a>
        </li>
      </ul>
    </nav>
  );
}
