import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        //Global styles on scroll here
        ::-webkit-scrollbar {
          width: 0.5rem;
        }
        ::-webkit-scrollbar-track {
          background: #afafaf;
        }
        ::-webkit-scrollbar-thumb {
          background: #a7a7a7;
          border-radius: 0.5rem;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8a8a8a;
        }
      `}
    />
  );
};
