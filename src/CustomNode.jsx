import React from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./CustomNode.module.css";

export const CustomNode = ({ testIdPrefix = "", ...props }) => {
  const { id } = props.node;
  const indent = props.depth * 16;

  const handleToggle = (e) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <div
      className={styles.root}
      style={{ paddingInlineStart: indent }}
      data-testid={`${testIdPrefix}custom-node-${id}`}
    >
      <div className={styles.container}>
        {props.hasChild && (
          <div className={styles.arrow} onClick={handleToggle}>
            <ArrowRightIcon data-testid={`arrow-right-icon-${id}`} />
          </div>
        )}
        <div className={styles.label}>
          <Typography variant="body2">{props.node.text}</Typography>
        </div>
      </div>
    </div>
  );
};
