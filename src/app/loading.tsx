
export default function Loading() {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
        <p className="text-sm font-medium text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
