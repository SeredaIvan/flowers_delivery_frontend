const ShopsListSkeleton = () => {
  return (
    <ul className="space-y-2 animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <li
          key={index}
          className="h-8 bg-gray-200 rounded"
        ></li>
      ))}
    </ul>
  );
};

export default ShopsListSkeleton;