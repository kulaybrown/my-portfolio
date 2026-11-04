import React from 'react';

export default function ContentPlaceholder() {
  return (
    <>
      {/* Add the custom keyframes animation via a style tag */}
      <style>{`
        @keyframes placeHolderShimmer {
          0% { background-position: -468px 0; }
          100% { background-position: 468px 0; }
        }
        .animated-background {
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: #f0f4f6;
          background: linear-gradient(to right, #f0f4f6 8%, #e0e4e6 18%, #f0f4f6 33%);
          background-size: 800px 104px;
          height: 100px;
          position: relative;
        }
        .background-masker {
          background: var(--surface2);
          position: absolute;
        }
        .background-masker.header-top {
          top: 10px;
          left: 0;
          right: 0;
          height: 10px;
        }
        .background-masker.header-topb {
          top: 0px;
          left: 80px;
          right: 0;
          height: 10px;
        }
        .background-masker.header-top2 {
          top: 60px;
          left: 0;
          right: 0;
          height: 10px;
        }
        .background-masker.header-top2b {
          top: 20px;
          left: 340px;
          right: 0;
          height: 40px;
        }
        .background-masker.header-top3 {
          top: 80px;
          left: 0;
          right: 0;
          height: 10px;
        }
        .background-masker.header-top3b {
          top: 70px;
          left: 400px;
          right: 0;
          height: 10px;
        }
        .background-masker.header-top3c {
          top: 90px;
          left: 120px;
          right: 0;
          height: 10px;
        }
        .background-masker.vline {
          top: 0;
          left: 0;
          width: 20px;
          height: 100%;
        }
        .background-masker.p-relative {
          position: relative;
        }
      `}</style>

      {/* Main Container Wrapper */}
      <div className="bg-[var(--surface2)] py-14 md:py-20">
        <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
          <div className="flex justify-start flex-col">
            <div
              className="w-full max-w-[472px] min-h-[100px]"
            >
              <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-topb"></div>
                <div className="background-masker header-top2"></div>
                <div className="background-masker header-top2b"></div>
                <div className="background-masker header-top3"></div>
                <div className="background-masker header-top3b"></div>
                <div className="background-masker header-top3c"></div>
              </div>
            </div>

            <div
              className="mt-10 w-full min-h-[100px] hidden md:block"
            >
              <div className="animated-background flex justify-evenly">
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
              </div>
            </div>

            <div
              className="mt-5 w-full min-h-[100px] hidden md:block"
            >
              <div className="animated-background flex justify-evenly">
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
              </div>
            </div>

            <div
              className="mt-5 w-full min-h-[100px] hidden md:block"
            >
              <div className="animated-background flex justify-evenly">
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
                <div className="background-masker p-relative vline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}