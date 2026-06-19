export default function Skeleton() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:px-8 md:grid-cols-2">
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          className="h-72 animate-pulse rounded-2xl border border-gray-100 bg-white shadow-soft"
        >
          <div className="m-8 h-4 w-28 rounded-full bg-gray-100" />
          <div className="mx-8 mt-14 h-8 w-4/5 rounded-full bg-gray-100" />
          <div className="mx-8 mt-4 h-8 w-3/5 rounded-full bg-gray-100" />
          <div className="mx-8 mt-10 h-4 w-2/3 rounded-full bg-gray-100" />
        </div>
      ))}
    </div>
  );
}
