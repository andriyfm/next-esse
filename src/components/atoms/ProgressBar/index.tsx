import * as React from "react";
import style from "./style.module.css";

export type VariantType = "blue" | "pink" | "red" | "green" | "yellow";

interface Props {
  variant: VariantType;
  value: number;
}

export const ProgressBar: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.base_bar} />
      <div
        style={{ width: `${props.value}%` }}
        className={`${style.color_bar} bg-${props.variant}-500`}
      />
    </div>
  );
};

React.memo(ProgressBar);
