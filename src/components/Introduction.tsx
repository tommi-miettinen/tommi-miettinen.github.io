const useQueryParams = () => {
  let query = window.location.search;
  let params = new URLSearchParams(query);
  return params;
};

const Introduction = ({ id }: { id: string }) => {
  const params = useQueryParams();
  const name = params.get("vastaanottaja");

  const greeting = name ? (
    <h1 className="text-xl text-white">
      Hei <span className="underline capitalize">{name},</span> olen Tommi Miettinen, itseopiskellut frontend/fullstack-kehittäjä
      Tampereelta.
    </h1>
  ) : (
    <h1 className="text-xl text-white">Hei olen Tommi Miettinen, itseopiskellut frontend/fullstack-kehittäjä Tampereelta.</h1>
  );

  return (
    <div id={id} className="p-4 h-full flex flex-col">
      {greeting}
    </div>
  );
};

export default Introduction;
