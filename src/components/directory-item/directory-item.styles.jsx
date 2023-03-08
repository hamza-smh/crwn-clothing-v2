import styled from 'styled-components';

export const BackgroundImage = styled.div `
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    `
export const Body = styled.div`
    height: 90px;
    padding: 0px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    position: absolute;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(36, 36, 36);
    color:whitesmoke;
    opacity: 0.6;
    
    h2 {
      font-weight: bold;
      margin: 10px 0 0;
      font-size: 22px;
      color: #ffffff;
      text-transform: uppercase; 
    
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
`

export const DirectoryItemContainer = styled.div `
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage}{
      transform: scale(1.1);
      transition: transform 900ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }
    
    &.large {
      height: 380px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
`

// .directory-item-container {
//   min-width: 30%;
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .directory-item-body {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .directory-item-body {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     opacity: 0.7;
//     position: absolute;
//     border: 1px solid rgb(255, 255, 255);
//     background-color: rgb(36, 36, 36);
//     color:whitesmoke;
//     opacity: 0.6;

//     h2 {
//       font-weight: bold;
//       margin: 10px 0 0;
//       font-size: 22px;
//       color: #ffffff;
//     }

//     p {
//       font-weight: lighter;
//       font-size: 16px;
//     }
//   }
// }
