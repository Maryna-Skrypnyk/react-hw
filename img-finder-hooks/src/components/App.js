import { Component } from 'react';
import Searchbar from './Searchbar';
import Container from './Container';
import Title from './Title';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import ImageError from './ImageError';
import LoaderSpinner from './LoaderSpinner';
import Button from './Button';
import LargeImg from './LargeImage';
import ButtonIcon from './ButtonIcon';
import { ReactComponent as IconClose } from '../assets/images/icons/close.svg';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import ScrollArrow from './ScrollArrow';

import 'react-toastify/dist/ReactToastify.css';

// import ImagePending from '../ImagePending';
import imgAPI from '../services/images-api';

import s from './App.module.scss';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    // imagesPageList: [],
    error: null,
    largeImageURL: '',
    tags: '',
    showModal: false,
    showLoadMoreBtn: false,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearchQuery !== nextSearchQuery || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      imgAPI
        .fetchImages(nextSearchQuery, nextPage)
        .then(images => {
          if (images.length === 0) {
            if (nextPage !== 1) {
              toast.warn(
                `No more images on your request "${nextSearchQuery}"`,
                { position: 'bottom-center' },
              );
            } else {
              toast.error(
                `There are no images on your request "${nextSearchQuery}"`,
              );
            }
            this.setState({ showLoadMoreBtn: false });
          } else {
            this.setState({ showLoadMoreBtn: true });
          }

          this.setState({
            images: [...this.state.images, ...images],
            page: nextPage,
            status: Status.RESOLVED,
          });
        })
        .catch(error => {
          toast.error(error.message);
          this.setState({ error, status: Status.REJECTED });
        });
    }
  }

  handleFormSubmit = ({ searchQuery }) => {
    if (searchQuery === this.state.searchQuery) {
      this.onLoadMore();
      return;
    }

    this.setState({ searchQuery, images: [], page: 1 });
  };

  scroll = () => {
    scroll.scrollToBottom();
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenImgModal = e => {
    // console.log(e.target.dataset.source);
    this.setState({
      largeImageURL: e.target.dataset.source,
      tags: e.target.alt,
    });

    this.toggleModal();
  };

  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
    this.scroll();
  };

  render() {
    const {
      status,
      tags,
      page,
      error,
      images,
      showModal,
      largeImageURL,
      showLoadMoreBtn,
    } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Container>
          {status === Status.IDLE && (
            <Title secondaryTitle="Enter search query!" />
          )}
          {status === Status.PENDING && <LoaderSpinner />}
          {images.length === 0 && page === 1 && status === Status.RESOLVED && (
            <ImageError message="" />
          )}
          {status === Status.REJECTED && <ImageError message={error} />}
          <ImageGallery images={images} onClickImage={this.onOpenImgModal} />
          {showLoadMoreBtn && (
            <Button contentBtn="Load More" onLoadMore={this.onLoadMore} />
          )}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <LargeImg largeImageURL={largeImageURL} tags={tags} />
              <ButtonIcon
                btnClass="btnCloseModal"
                onClick={this.toggleModal}
                aria-label="Close image"
              >
                <IconClose width="32" height="32" fill="currentColor" />
              </ButtonIcon>
            </Modal>
          )}
          <ToastContainer autoClose={3000} position="top-center" />
        </Container>
        <ScrollArrow type="down" />
        <ScrollArrow type="up" />
      </div>
    );
  }
}
