import React, { useState } from "react";
import { t } from "../i18n";
import { AppState } from "../types";
import { Dialog } from "./Dialog";
import "./ExportDialog.scss";
import { ActionManager } from "../actions/manager";
import { Button } from "./Button";
import { message } from "antd";
import {
  getContainerListFromStorage,
  setContainerNameToStorage,
  setContainerListToStorage,
  setElementsToStorage,
} from "../excalidraw-app/data/localStorage";
import { RESVERED_LOCALSTORAGE_KEYS } from "../excalidraw-app/app_constants";

export const NewSceneDialog = ({
  // elements,
  appState,
  setAppState,
}: // files
{
  appState: AppState;
  setAppState: React.Component<any, AppState>["setState"];
  // elements: readonly NonDeletedExcalidrawElement[];
  // files: BinaryFiles;
  // exportPadding?: number;
  actionManager: ActionManager;
}) => {
  const handleClose = React.useCallback(() => {
    setAppState({ openDialog: null });
  }, [setAppState]);

  const [newContainerName, setNewContainerName] = useState(appState.name);

  return (
    <>
      {appState.openDialog === "newScene" && (
        <Dialog onCloseRequest={handleClose} title={t("buttons.newScene")}>
          <input
            type="text"
            placeholder={t("labels.inputNewContainerName")}
            style={{
              minWidth: "90%",
              maxWidth: "100%",
            }}
            defaultValue={newContainerName}
            onChange={(e) => {
              setNewContainerName(e.target.value);
            }}
          />
          <Button
            style={{
              whiteSpace: "nowrap",
              padding: "0 20px",
              marginTop: 10,
              minWidth: 100,
              maxWidth: 200,
              backgroundColor: "var(--color-primary)",
              color: "#fff",
            }}
            onSelect={() => {
              const containerList: string[] = getContainerListFromStorage();

              if (containerList.includes(newContainerName)) {
                message.error(
                  `${newContainerName} ${t("canvasError.canvasRepeat")}`,
                );
                return;
              }

              if (RESVERED_LOCALSTORAGE_KEYS.includes(newContainerName)) {
                message.error(t("canvasError.canvasNameInvalid"));
                return;
              }

              setContainerNameToStorage(newContainerName);
              setContainerListToStorage([...containerList, newContainerName]);
              setElementsToStorage([]);

              window.location.reload();
            }}
          >
            {t("buttons.confirm")}
          </Button>
        </Dialog>
      )}
    </>
  );
};
