
function StayProductive() {
  return (
   <section className="pb-[150px]">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
      <div>
        <img src="/images/illustration-stay-productive.png" alt="stay-productive-img"/>
      </div>
      <div className="text-white">
        <h3 className="font-medium text-[35px] leading-[50px]">Stay productive,
            <br />
            wherever you are
        </h3>
        <div className="my-[15px] font-normal text-sm">
          <p className="mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        </div>
        <a href="/" className="text-primary  hover:text-[#42b0d1] transition-colors border-b-2 border-primary border-solid duration-200 pb-[5px] flex items-center gap-[15px] w-fit">See how Fylo works
         <img src="/images/icon-arrow.svg" alt="arrow-img" className="w-[20px] h-[20px] object-contain tracking-[0.8] animate-moveRight"/>
        </a>
      </div>
    </div>
   </section>
  )
}

export default StayProductive