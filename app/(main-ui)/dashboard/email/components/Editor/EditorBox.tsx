'use client'

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { MyButton } from '@/components/MyButton/MyButton';

const EditorBox=()=> 
{
    const editorRef = useRef<any>(null);
   
    function gettingTheText()
    {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    }

    return (
      <>
        <Editor
          apiKey="g8jyuiva662x7wopsh1cxva98gbbgo22cb9uyjgtrs8iiqn9"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <MyButton className="!mt-[1rem]" onClick={gettingTheText}>
          Guardar
        </MyButton>
      </>
    );
}

export default EditorBox