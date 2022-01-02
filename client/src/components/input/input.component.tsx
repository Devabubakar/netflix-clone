import React from 'react';
import { HeroInput, InputContainer, CtaContainer } from './input.style';
import { CustomButton } from '../button/button.style';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const handleClick = (event: Event) => {
  event.preventDefault();
};

interface Props {
  name: string;
  placeholder: string;
  type: string;
  wasSubmitted: boolean;
}

const getErrorMessage = (value: string | undefined, type: string) => {
  if (!value) return 'field is required';

  //email validation
  if (type === 'email') {
    //check if valid email
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
      // invalid email
      return 'please enter a valid email address';
    }
  }

  //password validation
  if (type === 'password') {
    const valueIsLongEnough = value.length >= 3;
    const valueIsShortEnough = value.length <= 10;

    if (!valueIsLongEnough) {
      console.log('value should be at least 3 characters');
      return 'value should be at least 3 characters';
    } else if (!valueIsShortEnough) {
      console.log(' value should be less than 10 characters ');
      return ' value should be less than 10 characters ';
    }
  }

  return null;
};

export const Input = ({ placeholder, type, name, wasSubmitted }: Props) => {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getErrorMessage(value, type);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  console.log(touched);

  return (
    <InputContainer>
      <HeroInput
        type={type}
        name={name}
        onClick={handleClick}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLFormElement>) =>
          setValue(event.currentTarget.value)
        }
        onBlur={() => setTouched(true)}
        id={`${name}-input`}
        required
      />
      {errorMessage ? <span>{displayErrorMessage}</span> : null}
    </InputContainer>
  );
};


//custom input for call to action inputs 

const CTAInput = ({ placeholder }: { placeholder: string }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues: any = Object.fromEntries(formData.entries());

    

    //check if form is valid
    const isFormValid = Object.values(formValues).every(
      (value: any) => !getErrorMessage(value, 'email')
    );

    setWasSubmitted(true);

    if (isFormValid) {
      try {
        await auth!.setEmail(formValues.email);

        //navigate to signup

        navigate('/signup');
      } catch (error) {
        
        auth!.setEmail('');
      }
    } else {
      console.log('ffs what went wrong');
    }
  };

  return (
    <CtaContainer onSubmit={handleSubmit} noValidate>
      <InputContainer>
        <HeroInput
          type='email'
          name='email'
          id='email'
          placeholder={placeholder}
          wasSubmitted={wasSubmitted}
        />
      </InputContainer>

      <CustomButton id='btn' large type='submit'>
        Get Started
      </CustomButton>
    </CtaContainer>
  );
};

export default React.memo(CTAInput);
