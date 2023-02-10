import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

function Container(props: ContainerProps) {
  const { styles } = props;
  return <div style={styles}>Container</div>;
}

export default Container;
