const Card = () => {
  return (
    <>
      <div className="hover:scale-95 scm w-80 inline-block ml-10
       rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img
          className="rounded-t-2xl "
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
        />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
         
        </div>
      </div>
    </>
  );
};
export default Card;
