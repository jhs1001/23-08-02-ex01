import React from "react";
import styles from "./CustomDragPreview.module.css";

export const CustomDragPreview = (props) => {
  const item = props.monitorProps.item;

  return (
    <div className={styles.root} data-testid="custom-drag-preview">
      {item.text}
    </div>
  );
};
