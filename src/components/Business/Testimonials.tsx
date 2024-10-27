import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <div className="my-10">
      <p className="mx-10 text-3xl">Our Testimonials :</p>
      <section className="flex h-full  justify-center items-center w-full">
        <div className=" h-max  rounded-2xl w-10/12">
          <Marquee pauseOnHover={true}>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image
                src="https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
                alt="test"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
