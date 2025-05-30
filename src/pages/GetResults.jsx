import React from "react";
import Logo from "../components/ui/Logo";
import security from "/security.svg";
import { useNavigate } from "react-router-dom";

const GetResults = () => {
  const inputRef = React.useRef();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const [isTouched, setIsTouched] = React.useState(false);

  const validateEmail = (email) => {
    if (!email) return "Please enter an email";
    if (!email.includes("@")) return "Please enter a valid email";
    return "";
  };

  React.useEffect(() => {
    if (!isTouched) return;
    const timer = setTimeout(() => {
      const result = validateEmail(email);
      setError(result);
    }, 500);
    return () => clearTimeout(timer);
  }, [email, isTouched]);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleNavigate = () => {
    const validationResult = validateEmail(email);
    setIsTouched(true);
    if (validationResult) {
      setError(validationResult);
      inputRef.current.focus();
      return;
    }

    setError("");
    navigate("/takeplan");
  };

  return (
    <main className="flex flex-col items-center gap-5 py-[2rem]">
      <Logo />
      <h2 className="text-[2.5rem] font-bold">You're almost done!</h2>
      <p className="text-[1.6rem]">Please enter your email to see results</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNavigate();
        }}
        className="flex flex-col gap-4 w-full"
      >
        <input
          ref={inputRef}
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsTouched(true);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="example@gmail.com"
          className={`rounded-[10px] w-full bg-[#E8E6EF] p-5 outline-none text-[1.6rem] border transition-colors duration-300 ${
            error
              ? "border-[#EA6747]"
              : isFocused
              ? "border-[#31728D]"
              : "border-transparent"
          }`}
        />
        {error && <p className="text-[#EA6747] self-start ">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#31728D] text-white py-4 rounded-[10px]"
        >
          <span className="text-[1.8rem] font-extrabold">Get results</span>
        </button>
      </form>
      <div className="flex items-center gap-3">
        <img src={security} alt="Security shield icon" />
        <p className="text-tertiary text-left">
          We respect your privacy and are committed to protecting your personal
          data. We’ll email you a copy of your results for convenient access.
        </p>
      </div>
    </main>
  );
};

export default GetResults;
