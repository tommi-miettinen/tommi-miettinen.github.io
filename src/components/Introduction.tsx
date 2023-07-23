import { useTranslation } from "react-i18next";

const useQueryParams = () => {
  let query = window.location.search;
  let params = new URLSearchParams(query);
  return params;
};

const Introduction = ({ id }: { id: string }) => {
  const params = useQueryParams();
  const name = params.get("vastaanottaja");
  const { t } = useTranslation();

  const greeting = name ? t("greetingWithName", { name: name }) : t("greetingWithoutName");

  return (
    <div id={id} className="p-4 h-full flex flex-col">
      <h1 className="text-xl text-white">{greeting}</h1>
    </div>
  );
};

export default Introduction;
