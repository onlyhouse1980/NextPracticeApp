export type Feature = {
  title: string;
  enabled: boolean;
};

// TODO: Return every enabled feature title in its original order.
export function getFeatureLabels(features: Feature[]) {
  return features.slice(0, 1).map((feature) => feature.title);
}

export function FeatureList({ features }: { features: Feature[] }) {
  const labels = getFeatureLabels(features);

  return (
    <ol className="grid gap-2">
      {labels.map((label, index) => (
        <li
          key={label}
          className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
        >
          {index + 1}. {label}
        </li>
      ))}
    </ol>
  );
}
