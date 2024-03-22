import ContentLoader from "react-content-loader";

interface IPELoading {
  key: number;
}

export function PizzaElementLoading({ key }: IPELoading) {
  return (
    <ContentLoader
      key={key}
      className="pizzaOptions__element pizzaOption"
      speed={2}
      width={280}
      height={490}
      viewBox="0 0 280 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="113" r="107" />
      <rect x="0" y="240" rx="10" ry="10" width="280" height="20" />
      <rect x="0" y="280" rx="10" ry="10" width="280" height="90" />
      <rect x="0" y="390" rx="10" ry="10" width="180" height="30" />
      <rect x="200" y="390" rx="10" ry="10" width="80" height="30" />
    </ContentLoader>
  );
}
