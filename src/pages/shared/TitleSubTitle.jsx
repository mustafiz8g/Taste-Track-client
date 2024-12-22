


const TitleSubTitle = ({title, subTitle}) => {
    return (
        <div className="flex flex-col justify-center items-center *:text-center w-8/12 mx-auto mt-4 mb-9 ">
               <h1 className="text-5xl font-medium mb-4" >{title}</h1>
               <h3 className="font-medium text-2xl">{subTitle}</h3>
             
        </div>
    );
};

export default TitleSubTitle;