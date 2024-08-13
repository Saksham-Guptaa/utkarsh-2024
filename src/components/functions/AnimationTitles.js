import {motion} from "framer-motion"

function AnimationTitles({title, className , style}) {
  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return(
    <motion.h1
    variants={hVariants}
    initial="hidden"
    whileInView="visible"
    className={className}
    style={style}
  >
    {title.split("").map((char, index) => (
      <motion.span variants={spanVariants} key={index}>
        {char}
      </motion.span>
    ))}
  </motion.h1>
  )
}

export default AnimationTitles