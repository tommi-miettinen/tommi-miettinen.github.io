const useQueryParams = () => {
  let query = window.location.search;
  let params = new URLSearchParams(query);
  return params;
};

const Introduction = () => {
  const params = useQueryParams();
  const name = params.get("vastaanottaja");

  return (
    <div className="p-4 h-full flex flex-col">
      <h1 className="text-xl text-white">
        Hei <span className="underline capitalize">{name},</span> olen Tommi Miettinen, itseopiskellut frontend/fullstack-kehittäjä
        Tampereelta.
      </h1>
    </div>
  );
};

export default Introduction;
