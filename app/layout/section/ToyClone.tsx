export function ToyClone() {
  return (
    <section className="bg-img w-[100vw] h-[100dvh] flex-col-center flex-wrap relative">
        <div className="top-[50%] left-[50%] absolute-content flex-col-center font-serif text-black-7xl font-light">
            <span>ToyProject</span>
            <span>&</span>
            <span>Cloning</span>
        </div>
        <div className="w-[270px] h-[360px] bg-black bg-toy-1"></div>
        <div className="w-[360px] h-[270px] bg-black mt-[100px]"></div>
        <div className="w-[360px] h-[270px] bg-black"></div>
        <div className="w-[270px] h-[360px] bg-black mt-[100px]"></div>
    </section>
  );
}
