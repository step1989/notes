const main = async () => {
  const res = await fetch("https://openjsf.org/blog11/");
  console.log(res);
  if (res.ok) {
    const data = await res.text();
    console.log(data);
  }
};

await main();
