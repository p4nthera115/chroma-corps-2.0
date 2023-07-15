export default function NotFound() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4x">
            It seems you are lost...
          </p>
          <p className="mb-4 text-lg font-light text-yellow-400">
            The Chroma Corps Academy is not located at this address.{" "}
          </p>
          <a
            href="/"
            className="inline-flex text-white hover:bg-gray-800 border-2 border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Take me to the Chroma Corps Academy
          </a>
        </div>
      </div>
    </section>
  );
}
