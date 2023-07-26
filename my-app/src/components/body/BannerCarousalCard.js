const banner =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png";

const BannerCarousalCard = () => {
  return (
    <>
      <div>
        <img className="rounded-full " src={banner} alt="banner" />
      </div>
    </>
  );
};
export default BannerCarousalCard;
