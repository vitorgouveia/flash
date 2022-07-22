import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { ArrowLeft } from "react-feather";

import { Button, Topbar, Input, Link, Select } from "@/components";

import styles from "@/styles/pages/register.module.scss";

const Register: FC = () => {
  const [step, setStep] = useState(0);
  const [codeValue, setCodeValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const setNumpadValue = (number: number) => {
    if (codeValue.length === 6) {
      /* do error */
    } else {
      setCodeValue(`${codeValue}${number}`);
    }
  };

  const title = () => {
    if (step === 0) {
      return <>Register</>;
    } else if (step === 1) {
      return <>Verification</>;
    } else if (step === 2) {
      return <>Personal Information</>;
    }
  };

  const description = () => {
    if (step === 0) {
      return <>Enter your e-mail</>;
    } else if (step === 1) {
      return <>Enter the verification code we sent to your phone</>;
    } else if (step === 2) {
      return <>Tell us some details about your life</>;
    }
  };

  const form = () => {
    if (step === 0) {
      return (
        <>
          <Input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-mail"
            name="email"
            type="email"
          />
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <Input
            value={codeValue}
            noLabel
            placeholder="1"
            name="digit1"
            type="string"
            onChange={(event) => setCodeValue(event.target.value)}
          />
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Full Name"
            name="Full name"
            type="text"
          />
          <Input
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            required
            placeholder="Date of Birth"
            name="Date of Birth"
            type="date"
          />
          <Select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
            placeholder="Gender"
            name="gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">I {"don't"} want to tell</option>
            <option value="idk">I {"don't"} know yet</option>
          </Select>
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Your ultra secret password"
            name="password"
            type="password"
          />
        </>
      );
    }
  };

  useEffect(() => {
    if (codeValue.length === 6) {
      /* verify the code */
      console.log("verify code!");
      console.log(step);
      setStep(2);
    }
  }, [codeValue, step]);

  return (
    <div className={styles.registerContainer}>
      <Head>
        <title>FinanceHub | Register</title>
      </Head>
      <div className={styles.mainSection}>
        {step > 0 ? (
          <Topbar onClick={() => setStep(step - 1)} back="#" />
        ) : (
          <Topbar back="/" />
        )}

        <div className={styles.title}>
          <h1>{title()}</h1>
          <p>{description()}</p>
        </div>

        <div className={styles.form} data-sideways={step === 1}>
          {form()}
        </div>

        {step === 1 ? (
          <div className={styles.pinpad}>
            <button onClick={() => setNumpadValue(1)}>1</button>
            <button onClick={() => setNumpadValue(2)}>2</button>
            <button onClick={() => setNumpadValue(3)}>3</button>
            <button onClick={() => setNumpadValue(4)}>4</button>
            <button onClick={() => setNumpadValue(5)}>5</button>
            <button onClick={() => setNumpadValue(6)}>6</button>
            <button onClick={() => setNumpadValue(7)}>7</button>
            <button onClick={() => setNumpadValue(8)}>8</button>
            <button onClick={() => setNumpadValue(9)}>9</button>
            <button></button>
            <button onClick={() => setNumpadValue(0)}>0</button>
            <button
              onClick={() =>
                setCodeValue(`${codeValue.substring(0, codeValue.length - 1)}`)
              }
            >
              <ArrowLeft />
            </button>
          </div>
        ) : (
          <div className={styles.terms}>
            By submitting this application you confirm that you are authorized
            to share this information and agree with our{" "}
            <span>
              <Link href="#terms">Term and Conditions</Link>
            </span>
          </div>
        )}

        {step === 0 && (
          <Button
            variant="primary"
            onClick={() => {
              if (!!email !== false) {
                setStep(1);
              } else {
                /* do something */
                /* check for errors */
              }
            }}
          >
            Send Verification Code
          </Button>
        )}

        {step === 2 && (
          <Button
            variant="primary"
            onClick={() => {
              console.log("redirect!");
            }}
          >
            <Link href="/dash">Finish</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Register;