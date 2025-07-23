import React from 'react'

const Links = () => {
  return (
    <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2 className="mb-8">Look for me here ~</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">GitHub</p>
            <a href="https://github.com/srummanf">@srummanf</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">
              X (formerly Twitter)
            </p>
            <a href="https://x.com/srummanf">@srummanf</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">LinkedIn</p>
            <a href="https://www.linkedin.com/in/srummanf/">@srummanf</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Email</p>
            <a href="mailto:rummanfardeen4567@gmail.com">
              rummanfardeen4567@gmail.com
            </a>
          </div>
        </div>
      </section>
  )
}

export default Links