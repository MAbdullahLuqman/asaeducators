export default function RequirementTable({ rows, columns = ["Level", "Academic Entry", "English Evidence", "Key Documents"] }) {
  const gridClass = columns.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className={`hidden bg-[#0B2D57] text-sm font-bold text-white md:grid ${gridClass}`}>
        {columns.map((column) => (
          <div key={column} className="px-5 py-4">
            {column}
          </div>
        ))}
      </div>
      <div className="divide-y divide-gray-200">
        {rows.map((row) => (
          <div key={row.level || row.test} className={`grid gap-3 p-5 md:gap-0 md:p-0 ${gridClass}`}>
            {(row.cells || [row.level, row.academic, row.english, row.documents]).map((cell, index) => (
              <div key={`${row.level || row.test}-${index}`} className="md:border-l md:border-gray-100 md:px-5 md:py-4 first:md:border-l-0">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#1B65B9] md:hidden">
                  {columns[index]}
                </p>
                <p className="text-sm font-semibold leading-6 text-[#0B2D57]">{cell}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
