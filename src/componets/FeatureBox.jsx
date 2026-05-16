function FeatureBox({ title, desc, icon }) {
  return (
    <div className="text-white flex flex-col items-center text-center p-4">
        <img 
          src={`/src/assets/images/${icon}`} 
          alt={title} 
          className="w-[80px] h-[80px] object-contain" 
        />

        <h4 className="text-xl font-semibold mt-[30px] mb-[15px]">
          {title}
        </h4>
        
        <p className="font-normal text-sm max-w-[350px] leading-[1.6]">
          {desc}
        </p>
    </div>
  )
}

export default FeatureBox;