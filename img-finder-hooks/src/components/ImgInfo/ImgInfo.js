import { Component } from 'react';
import ImageGallery from '../ImageGallery';
import ImageError from '../ImageError';
import LoaderSpinner from '../LoaderSpinner';
import Button from '../Button';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';

// import ImagePending from '../ImagePending';
import imgAPI from '../../services/images-api';

import s from './ImgInfo.module.scss';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImgInfo extends Component {
  state = {
    images: [],
    imagesPageList: [],
    error: null,
    page: 1,
    // searchQuery: '',
    // loading: false,
    largeImageURL: '',
    tags: '',
    showModal: false,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        // images: [],
        // page: 1,
        // error: null,
        // imagesPageList: [],
        status: Status.PENDING,
      });

      this.renderImagesList();
    }
  }

  renderImagesList = async () => {
    const { page } = this.state;
    const { searchQuery } = this.props;

    try {
      // this.setState({ loading: true });
      const imagesPageList = await imgAPI.fetchImages(searchQuery, page);
      this.setState({ imagesPageList });
      // console.log(this.state.imagesPageList);
      if (imagesPageList.length === 0) {
        this.setState(({ page }) => ({
          page: page - 1,
          error: `There are no images on your request "${searchQuery}"`,
        }));
      }

      this.setState(({ images, page, imagesPageList }) => ({
        images: [...images, ...imagesPageList],
        page: page + 1,
        imagesPageList: [...imagesPageList],
        status: Status.RESOLVED,
      }));
    } catch (error) {
      toast.error(error.message);
      this.setState({ error, status: Status.REJECTED });
    }
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
    this.setState({
      largeImageURL: e.target.dataset.source,
      tags: e.target.alt,
    });
    this.toggleModal();
  };

  loadMore = () => {
    // this.setState({ page: this.state.page + 1 });
    this.renderImagesList();
    this.scroll();
  };

  render() {
    const { images, error, status, imagesPageList } = this.state;

    if (status === Status.IDLE) {
      return <div className={s.title}>Enter search query!</div>;
    }

    if (status === Status.PENDING) {
      return <LoaderSpinner />;
    }

    if (images.length === 0 || status === Status.REJECTED) {
      return <ImageError message={error} />;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          <ImageGallery images={images} />
          <Button contentBtn="Load More" onLoadMore={this.loadMore} />
        </>
      );
    }

    // if (
    //   status === Status.RESOLVED &&
    //   imagesPageList.length > 0 &&
    //   imagesPageList.length < 11
    // ) {
    //   return (
    //     <>
    //       <ImageGallery images={images} />
    //       <Button disabled contentBtn="End" />
    //     </>
    //   );
    // }
  }
}
