import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-start justify-start w-full h-full gap-4">
          <div className="text-4xl text-black dark:text-white">
            Họp lớp
          </div>
          <div className="text-xl">
            <span className="text-red-500 dark:text-red-600 font-bold hover:text-red-400 dark:hover:text-red-500">mùng 4 Tết&nbsp;</span> như mọi năm nhé các đồng chí!
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  );
}
