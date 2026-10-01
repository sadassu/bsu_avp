const DropdownMenu = ({ title, href, columns, image }) => {
  return (
    <div className="relative h-full group">
      <a
        href={href}
        className="
          relative h-full flex items-center
          text-sm font-medium text-gray-700
          after:absolute after:bottom-0 after:left-0
          after:w-0 after:h-0.75
          after:bg-red-600
          after:transition-all after:duration-300
          group-hover:text-red-600
          group-hover:after:w-full
        "
      >
        {title}
      </a>

      <div
        className="
          fixed top-15 left-0 w-screen
          bg-white border border-gray-200 shadow-lg
          opacity-0 invisible translate-y-2
          group-hover:opacity-100
          group-hover:visible
          group-hover:translate-y-0
          transition-all duration-200 z-50
        "
      >
        <div className="max-w-7xl mx-auto p-8 flex gap-10">
          {/* LEFT - IMAGE / LOGO */}
          <div className="w-1/4 flex items-center justify-center">
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={`${title} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-sm text-gray-400">Logo / Image</span>
              )}
            </div>
          </div>

          {/* RIGHT - MENU COLUMNS */}
          <div className="flex-1 grid grid-cols-4 gap-8">
            {columns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {column.title}
                </h3>

                <div className="flex flex-col gap-2">
                  {column.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-red-600"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
