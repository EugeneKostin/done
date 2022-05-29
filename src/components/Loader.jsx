import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <Loading
      color="rgb(102, 51, 255)"
      duration={4}
      hasDuration
      onTimeout={Interaction}
      // Using default values:
      fadeOut
      indicator="Dots"
    />
  );
}

export default Loader;
