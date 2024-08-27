import { AppDataSource } from '../database/dataSource';

const checkDbConnection = async () => {
  try {
    console.log('Database connection is open:', AppDataSource.isInitialized);
  } catch (error) {
    console.error('Error checking database connection:', error);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
};

checkDbConnection();
