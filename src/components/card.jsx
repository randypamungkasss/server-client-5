export const Card = ({
  grid_picture_url,
  name,
  retail_price_cents,
  release_year,
}) => {
  return (
    <div className="border rounded-xl flex flex-col gap-2 py-5 justify-center items-center">
      <img src={grid_picture_url} className="w-[200px]" />
      <div className=" w-full px-5">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>Harga : ${retail_price_cents}</p>
        <p>Tahun : {release_year}</p>
      </div>
      <button className="px-10">Detail</button>
    </div>
  );
};
