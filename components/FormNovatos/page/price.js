import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Price() {
  const router = useRouter();
  const setQuest = formNovatosState((state) => state.setQuest);
  const nameForm = "price";

  const onSubmit = (event) => {
    console.log(router.basePath);
    setQuest(event);
    console.log(event);
    router.push("/parking");
  };

  const questions = [
    {
      value: 3,
      title: "$500 - $1000",
    },
    {
      value: 4,
      title: "$1001 - $1500",
    },
    {
      value: 5,
      title: "$1501 - $2000",
    },
    {
      value: 6,
      title: "$2001 - $2500",
    },
    {
      value: 7,
      title: "$3000 o más",
    },
  ];

  return (
    <FormNovatos
      title={""}
      description={"¿Cuál es tu presupuesto?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
      progress={90}
    />
  );
}
