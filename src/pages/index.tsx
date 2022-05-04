import type { NextPage } from "next";
import { Button } from "src/lib/mantine/Button";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";
import { useViewportSize } from "src/lib/mantine/useViewportSize";
import { Select } from "@mantine/core";

const handleClick = () => {
  console.log("Hello!");
};

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  return (
    <div className="p-20">
      <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
        <div>{`width: ${width}`}</div>
        <div>{`largerThanXs: ${largerThanXs}`}</div>
        <div>{`largerThanSm: ${largerThanSm}`}</div>
        <div>{`largerThanMd: ${largerThanMd}`}</div>
        <div>{`largerThanLg: ${largerThanLg}`}</div>
        <div>{`largerThanXl: ${largerThanXl}`}</div>
      </div>
      <Button dent onClick={handleClick} className="mt-4 block">
        Click me!
      </Button>
      <Button onClick={handleClick} className="mt-4 block">
        Click me!
      </Button>
      <Select
        className="mt-20 bg-red-400"
        classNames={{
          input: "bg-blue-100",
          dropdown: "bg-yellow-100",
        }}
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
};

export default Home;
