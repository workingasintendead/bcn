import { makeAutoObservable } from 'mobx';

interface ConfigData {
  sections: Section[];
}

export interface Section {
  imageSrc: string;
  bgColor: string;
  textColor: string;
  text: string;
  link: string;
}

class EdgeConfigStore {
  configData: ConfigData | null = null;
  isLoading: boolean = true;
  error: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setConfigData(data: ConfigData) {
    this.configData = data;
    this.isLoading = false;
  }

  setError() {
    this.error = true;
    this.isLoading = false;
  }

  fetchConfigData = async () => {
    try {
      const res = await fetch('/api/edge-config');
      const data = await res.json();
      this.setConfigData(data);
    } catch (error) {
      console.error('Error fetching config:', error);
      this.setError();
    }
  };
}

export const edgeConfigStore = new EdgeConfigStore();
