import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
  DndProvider
} from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import { CustomDragPreview } from "./CustomDragPreview";
import { theme } from "./theme";
import styles from "./App.module.css";
import SampleData from "./sample_data.json";

function App() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree) => setTreeData(newTree);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
          <Tree
            tree={treeData}
            rootId={0}
            render={(node, options) => <CustomNode node={node} {...options} />}
            dragPreviewRender={(monitorProps) => (
              <CustomDragPreview monitorProps={monitorProps} />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              dropTarget: styles.dropTarget
            }}
          />
        </div>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
