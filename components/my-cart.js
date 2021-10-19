import { useState, Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { LevelType, LevelType2 } from "../lib/functions"

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? "circle selected" : "circle"} onClick={onClick} />
)

const StarRating = ({ totalStars }) => {
  const [starsSelected, selectStar] = useState(0)
  return (
    <div className="circle-rating mr-2">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
    </div>
  )
}

function MyCart() {
  const [selected, setSelected] = useState(LevelType[0])
  const [selectedtwo, setSelectedTwo] = useState(LevelType2[0])

  return (
    <>
      <div className="mt-10 max-w-7xl mx-auto">
        <h1 className="text-4xl m-8 font-bold"> My Cart</h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-7 md:col-span-12 lg:col-span-7 xxl:col-span-7">
            <div className="bg-white py-8 px-1 sm:px-4 shadow-xl rounded-lg my-4 mx-4 sm:px-1">
              <div className="flex justify-around px-4 items-center">
                <div className="flex mr-5 sm:mr-10">
                  <img
                    className="h-7 w-7 sm:w-10 sm:h-10"
                    src="/delete-btn.png"
                    alt="image"
                  />
                </div>
                <div className="mr-4 bg-blue-300 shadow-xl rounded-lg w-60 h-40">
                  <div className="flex bg-white py-2 px-1 sm:px-2 shadow-xl rounded-lg my-4 mx-4 sm:px-1 w-9">
                    <img
                      className="h-5 w-5 "
                      src="/file-icon-blue.png"
                      alt="image"
                    />
                  </div>
                  <div className="flex text-white my-2 font-medium sm:text-lg ml-4 text-base">
                    Google Doc
                  </div>
                  <div className="text-white ml-4 sm:text-sm font-light text-xs">
                    Used for Business
                  </div>
                </div>
                <div className="">
                  <p className="sm:text-2xl font-light text-xl">Google Doc</p>
                  <div>
                    <div className="flex justify-start items-center flex-col sm:flex-row mt-1">
                      <div className="">
                        <StarRating totalStars={3} />
                      </div>
                      <div className="py-2 md:col-span-2 col-span-6">
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-28 px-3 py-2 text-left border border-gray-300 bg-white  rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:placeholder-green-400 focus:bg-white focus:border-green-400 ">
                              <span className="truncate text-base block  py-0.3">
                                {selected.level}
                              </span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {LevelType.map((levelT, levelIdx) => (
                                  <Listbox.Option
                                    key={levelIdx}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? "text-black bg-gray-100"
                                          : "text-gray-900"
                                      }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={levelT}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          } block truncate`}
                                        >
                                          {levelT.level}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`${
                                              active
                                                ? "text-amber-600"
                                                : "text-amber-600"
                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                          >
                                            <CheckIcon
                                              className="w-5 h-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 font-light">150 THB</div>
                </div>
              </div>
            </div>

            <div className="bg-white py-8 px-1 sm:px-4 shadow-xl rounded-lg my-4 mx-4 sm:px-1 mt-6">
              <div className="flex justify-around px-4 items-center">
                <div className="flex mr-5 sm:mr-10">
                  <img
                    className="h-7 w-7 sm:w-10 sm:h-10"
                    src="/delete-btn.png"
                    alt="image"
                  />
                </div>
                <div className="mr-4 bg-yellow-500 shadow-xl rounded-lg w-60 h-40">
                  <div className="flex bg-white py-2 px-1 sm:px-2 shadow-xl rounded-lg my-4 mx-4 sm:px-1 w-9">
                    <img
                      className="h-5 w-5 "
                      src="/file-orange.png"
                      alt="image"
                    />
                  </div>
                  <div className="flex text-white my-2 font-medium sm:text-lg ml-4 text-base">
                    Google Slides
                  </div>
                  <div className="text-white ml-4 sm:text-sm font-light text-xs">
                    Used for Business
                  </div>
                </div>
                <div className="">
                  <p className="sm:text-2xl font-light text-xl">
                    Google Slides
                  </p>
                  <div>
                    <div className="flex justify-start items-center flex-col sm:flex-row mt-1">
                      <div className="">
                        <StarRating totalStars={3} />
                      </div>
                      <div className="py-2 md:col-span-2 col-span-6">
                        <Listbox value={selectedtwo} onChange={setSelectedTwo}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-28 px-3 py-2 text-left border border-gray-300 bg-white  rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:placeholder-green-400 focus:bg-white focus:border-green-400 ">
                              <span className="truncate text-base block  py-0.3">
                                {selectedtwo.leveltwo}
                              </span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {LevelType2.map((levelT, levelIdx) => (
                                  <Listbox.Option
                                    key={levelIdx}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? "text-black bg-gray-100"
                                          : "text-gray-900"
                                      }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={levelT}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          } block truncate`}
                                        >
                                          {levelT.leveltwo}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`${
                                              active
                                                ? "text-amber-600"
                                                : "text-amber-600"
                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                          >
                                            <CheckIcon
                                              className="w-5 h-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 font-light">150 THB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 md:col-span-12 lg:col-span-5 xxl:col-span-5">
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="text-2xl py-2 mb-4 font-medium">
                <p>Order Info</p>
              </div>

              <div className="flex justify-between">
                <div className="text-lg py-2 text-gray-400 font-light">
                  <p>Subtotal</p>
                </div>
                <div className="text-lg py-2">
                  <div className="flex flex-row space-x-2 w-full items-center rounded-lg text-gray-400 font-light">
                    <p>THB 300</p>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b-2 mb-2 pb-10 flex justify-around mt-6">
                <div className="mt-3 mr-4">
                  <img className="h-5 w-5" src="/cupon-icon.png" />
                </div>

                <div className="mr-6">
                  <input
                    name="shippingcart"
                    placeholder="Promotion code"
                    type="text"
                    className="text-md block px-3 py-2.5 mr-14 rounded w-full bg-white border border-gray-200 placeholder-gray-300  focus:placeholder-gray-400 focus:bg-white focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div className="">
                  <button
                    type="button"
                    className="text-lg font-semibold text-green-400 w-full rounded-2xl px-10 py-2 block border border-green-400 hover:text-white hover:bg-green-400"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center text-center mt-6">
                <div className="text-xl">
                  <p>Total Payment</p>
                </div>
                <div className="text-lg py-2">
                  <div className="flex flex-row space-x-2 w-full items-center  font-semibold text-4xl text-green-400">
                    <p>THB 300</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 mb-4">
                <button
                  type="button"
                  className="mt-3 text-lg font-semibold bg-green-400 w-full text-black rounded-2xl px-6 py-3 block shadow-xl hover:bg-green-500"
                >
                  Login To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCart
