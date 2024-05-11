"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    console.log("Rejected files:", rejectedFiles);
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    console.log("Accepted files:", acceptedFiles);
  };

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="dropzone h-full w-full flex-1 flex flex-col items-center justify-center"
            >
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
