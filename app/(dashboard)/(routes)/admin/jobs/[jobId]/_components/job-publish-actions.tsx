"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

interface JobPublishActionProps {
  jobId: string;
  disabled: boolean;
  isPublished: boolean;
}

export const JobPublishAction = ({
  jobId,
  disabled,
  isPublished,
}: JobPublishActionProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {};

  const deleteHandler = () => {};

  return (
    <div className="flex items-center gap-x-3">
      <Button
        variant={"outline"}
        onClick={clickHandler}
        disabled={disabled || isLoading}
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>

      <Button
        variant={"destructive"}
        size={"icon"}
        disabled={isLoading}
        onClick={deleteHandler}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};
