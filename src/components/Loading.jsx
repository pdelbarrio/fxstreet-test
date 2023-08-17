import { DotPulse } from "@uiball/loaders";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <DotPulse size={50} speed={1.3} color="#E4871B" />;
    </div>
  );
}
