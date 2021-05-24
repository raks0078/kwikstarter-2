const getPartiCiplesParams = (theme: string) => {
  return {
    particles: {
      number: {
        value: 50
      },
      color: {
        value: theme === "dark" ? "#262C43" : "#cccccc"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 7
      },
      lineLinked: {
        distance: 0,
        color: "#262C43"
      },
      move: {
        speed: 4
      }
    }
  };
};

export default getPartiCiplesParams;
